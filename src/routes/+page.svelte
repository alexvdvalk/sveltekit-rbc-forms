<script lang="ts">
  import { AppBar } from "@skeletonlabs/skeleton";
  import type { PageData } from "./$types";

  interface Props {
    data: PageData;
  }

  const { data }: Props = $props();

  let language = $state("en-US");

  let title = $derived(
    data.form.data.translations.find((e) => e.languages_code === language)
      ?.label
  );
</script>

<!-- <pre>{JSON.stringify(data.form, null, 2)}</pre> -->
<h1 class="h2 text-center my-1">{title}</h1>

<section class="flex flex-col gap-5">
  {#each data.form.data.groups as group}
    {@const label = group.translations.find(
      (i) => i.languages_code === language
    )?.label}
    <div class="card p-4">
      <header class="card-header">
        <h3 class="h3">
          {label}
        </h3>
      </header>
      <section class="p-4 grid grid-cols-1 md:grid-cols-2 gap-5">
        {#each group.fields as field}
          {@const translation = field.form_fields_id.translations.find(
            (i) => i.languages_code === language
          )}
          <!-- <pre>{JSON.stringify(field.form_fields_id, null, 2)}</pre> -->

          <!-- style={`width: ${field.form_fields_id.width}%;`} -->
          <label class="label mx-auto w-full">
            <span>{translation?.label}</span>
            {#if field.form_fields_id.type === "text"}
              <input
                class="input"
                type={field.form_fields_id.type}
                placeholder={translation?.placeholder}
              />
            {:else if field.form_fields_id.type === "select"}
              <select class="select">
                {#each translation?.options || [] as option}
                  <option value={option.value}>{option.label}</option>
                {/each}
              </select>
            {:else if field.form_fields_id.type === "radio"}
              {#each translation?.options || [] as option}
                <label class="flex items-center space-x-2">
                  <input
                    class="radio"
                    type="radio"
                    checked
                    name={translation?.label}
                    value={option.value}
                  />
                  <p>{option.label}</p>
                </label>
              {/each}
            {:else if field.form_fields_id.type === "checkbox"}
              {#each translation?.options || [] as option}
                <label class="flex items-center space-x-2">
                  <input class="checkbox" type="checkbox" checked />
                  <p>{option.label}</p>
                </label>
              {/each}
            {/if}
          </label>
        {/each}
      </section>
    </div>
  {/each}
</section>

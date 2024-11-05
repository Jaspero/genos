<script lang="ts">
  import CommonFormPage from '$lib/common/CommonFormPage.svelte';
  import type { CommonEditFormPageData, CommonNewFormPageData } from '$lib/common/common-form-page';
  import Properties from '../../../pages/forms/Properties.svelte';

  export let data: {
    data: CommonNewFormPageData | CommonEditFormPageData;
  };
</script>

<CommonFormPage data={data.data} />

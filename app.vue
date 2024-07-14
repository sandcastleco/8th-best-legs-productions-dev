<template>
  <Head>
    <Link rel="stylesheet" herf="https://use.typekit.net/cde1iuc.css"></Link>
    <Title>Sex, Camp, Rock 'N Roll!</Title>
    <Meta property="og:type" :content="'website'" />
    <Meta property="og:url" :content="'https://www.8thbestlegs.biz'" />
    <Meta
      property="og:description"
      :content="'Sex, Camp, Rock \‘N Roll is a musical cabaret fantasy of story, song, and sensuality, boldly exploring sexuality and sex work in a raw, bareback fashion. Featuring Ryan Patrick Welsh and ditzy diva duo The K*ntz!'"
    />
    <Meta property="og:image" :content="'./images/thumbnail.png'" />
    <Body>
      <NuxtPage />
    </Body>
  </Head>
</template>

<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: "bodyClasses",
  },
  htmlAttrs: {
    class: "htmlClasses",
  },
});
</script>

<style lang="scss">
@import url("https://use.typekit.net/bsw8ipv.css");

.htmlClasses {
  margin: auto;
}

.bodyClasses {
  background-color: #120da4;
}
</style>

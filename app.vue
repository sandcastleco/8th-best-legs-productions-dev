<template>
  <Head>
    <Link rel="stylesheet" herf="https://use.typekit.net/cde1iuc.css"></Link>
    <Title>Sex, Camp, Rock 'N Roll!</Title>
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
  background-image: url("./images/bg.jpg");
  background-size: 100%;
  background-repeat: repeat-x;
  background-color: #120da4;
}
</style>

<template>
  <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li 
    v-for="(path, pathIndex) of paths"
    :key="pathIndex"
    class="breadcrumb-item"
    :class="{active: pathIndex === -1 }"
    >
    <nuxt-link :to="path">{{ labels[pathIndex] }}</nuxt-link>
    </li>
    <li class="breadcrumb-item active" aria-current="page">{{ activeLabel }}</li>
  </ol>
</nav>
</template>

<script>
export default {
    name: 'BreadcrumpsElement',
    props: {
        paths:{
            type: Array,
            required: true
        },
        labels:{
            type: Array,
            required: true
        },
        activeLabel:{
            type: String,
            required: true
        }
    }
}
</script>

<style>
    ol{
        font-size: inherit;
        margin-left: 1%;
        margin-top: 4%;
    }
</style>

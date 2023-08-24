<template>
  <q-layout view="hHh lpR fFf">
    <q-header bordered class="bg-white text-black">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-btn class="gt-xs" dense flat round to="/">
          <q-icon class="text-dark" size="lg">
            <img src="icons/navbar-logo.png" />
          </q-icon>
        </q-btn>

        <q-toolbar-title
          class="title-wrapper absolute-center"
          style="
            overflow: unset;
            padding: 0px 2.5em 0px 1.15em;
            pointer-events: none;
          "
        >
          <span class="title-main">The Best Irregular Verbs</span>
          <small class="title-sub">(learning experience)</small>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      overlay
      behavior="desktop"
      bordered
    >
      <q-list class="fit">
        <q-item-label header> Menu </q-item-label>

        <q-item to="/" exact exact-active-class="text-primary text-weight-bold">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Irregular Verbs</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          to="/about"
          exact
          exact-active-class="text-primary text-weight-bold"
        >
          <q-item-section avatar>
            <q-icon name="info" />
          </q-item-section>
          <q-item-section>
            <q-item-label>About</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer bordered class="bg-white text-black">
      <q-toolbar>
        <q-toolbar-title class="container-wider text-subtitle2">
          © 2023 The Best Irregular Verbs |
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

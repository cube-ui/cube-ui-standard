<template>
  <div class="cube-page">
    <cube-button text="Button"></cube-button>
    <cube-button text="Button" icon="right"></cube-button>
    <cube-button text="Button" tip="Tip"></cube-button>
    <cube-button text="Button" tip="Tip" icon="alert">
      <span>Custom Button</span>
    </cube-button>
    <cube-button primary>Primary Button</cube-button>
    <cube-button active>Active Button</cube-button>
    <cube-button disabled>Disabled Button</cube-button>
    <cube-button light>Light Button</cube-button>
    <cube-button light disabled>Light Disabled Button</cube-button>
    <cube-button outline>Outline Button</cube-button>
    <cube-button outline primary>Outline Primary Button</cube-button>
    <cube-button outline disabled>Outline Disabled Button</cube-button>
    <cube-button inline>Inline Button</cube-button>
    <cube-button inline primary>Inline Primary Button</cube-button>
    <cube-button inline outline>Inline Outline Button</cube-button>
    <cube-button inline outline primary>
      Inline Outline Primary Button
    </cube-button>
    <cube-button inline outline disabled>
      Inline Outline Disabled Button
    </cube-button>
    <cube-button link>Link Button</cube-button>
    <cube-button link primary>Link Primary Button</cube-button>
    <cube-button link disabled>Link Disabled Button</cube-button>
    <cube-button icon="search" circle></cube-button>
    <cube-button icon="search" circle inline></cube-button>
    <cube-button icon="search" circle inline primary></cube-button>
    <cube-button icon="search" circle inline outline></cube-button>
    <cube-button icon="search" circle inline outline disabled></cube-button>
    <cube-button icon="search" circle inline link></cube-button>
    <cube-button circle inline>A</cube-button>
  </div>
</template>

<style lang="stylus">
.cube-page
  >
    .cube-btn
      margin var(--cube-size-xxl) 0
    .cube-btn_inline
      margin-right var(--cube-size-xxl)
</style>

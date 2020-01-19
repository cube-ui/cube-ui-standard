<template>
  <button class="cube-btn" :type="type" :class="rootClass" @click="handleClick">
    <cube-icon v-if="icon" :type="icon" />
    <div class="cube-btn-content">
      <slot></slot>
      <span>{{ text }}</span>
      <span class="cube-btn-tip">{{ tip }}</span>
    </div>
  </button>
</template>

<template>
  <div>
    <div v-if="user" class="min-h-full"> 
    </div>
    <AuthPage v-else />
  </div>
</template>

<script setup>
const { useAuthUser, initAuth } = useAuth()
const user = useAuthUser()

// Enregistre initAuth et le lancera avant les autres hook qui sont "mounted" 
onBeforeMount(() => {
  initAuth()
})


</script>


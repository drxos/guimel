<template>
  <div>
    <t-section-title title='About'></t-section-title>
    <section class="main" v-animate-css="'fadeInRightBig'">
      <div class="block">
        <div class="line">
          <div class="md-8 md-offset-2">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex explicabo suscipit dolor aut voluptatum, corporis totam animi quis illo accusantium qui odio distinctio voluptas ipsa neque, similique repudiandae at excepturi?
              Deleniti tenetur quidem voluptatibus sed facere facilis eaque consequatur! Ab, suscipit? Quaerat repellat exercitationem odit laudantium voluptate in cupiditate, quidem sit sed facilis ducimus voluptatum architecto! Ex consequatur quos repudiandae.
              In architecto labore debitis asperiores dolor at eum facere quia iusto deserunt doloribus explicabo veritatis nihil nisi laudantium itaque quisquam hic suscipit culpa, sequi, voluptatum nesciunt! Consectetur, voluptatibus. Harum, facere.
              Maiores vel tenetur eos ea, quae earum ducimus fuga iure est quasi laudantium blanditiis a, eveniet molestias, obcaecati id modi ab sequi. Mollitia ea commodi expedita nesciunt delectus libero praesentium.
              Sapiente autem illo aperiam dignissimos vel cupiditate blanditiis eum qui accusamus. Cum consectetur odio iure mollitia ducimus deserunt, consequatur in quasi similique quisquam animi, quae voluptate possimus magni qui nemo! 
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import TSectionTitle from '@/components/includes/TSectionTitle'
  import VueMarkdown from 'vue-markdown'
  
  export default {
    components: {
      TSectionTitle,
      VueMarkdown,
    },
    name: 'app',
    data() {
      return {
        about: 'loren',
      }
    },
    async mounted() {
      this.about = await this.$http.get('https://api.github.com/repos/ndelvalle/generator-api/contents/.eslintrc.json')
      try {
        const response = await this.about
        this.about = response.data
      } catch (err) {
        // eslint-disable-next-line
        console.log('Erreur', err)
      }
    },
  }
</script>

<style>

</style>
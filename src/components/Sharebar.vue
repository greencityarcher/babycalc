<template>
  <section class="footer">
    <div class="container">
      <div class="sharebar mb-5">
        <h5 class="text-center mb-5" v-text="$ml.with('VueJS').get('shareUs')"/>
        <hr />
        <ul class="sharebar__link-list">
          <li>
            <a href="https://twitter.com/share?text=See%20the%20baby%20gender%20prediction%20calculator%20-%20&url=https://babycalc.info%2F" class="btn rounded-circle btn-icon-only btn-icon btn-primary btn-sharebar" target="_blank">
              <i class="fa fa-twitter"></i>
            </a>

          </li>
          <li>
            <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fbabycalc.info%2F&amp;src=sdkpreparse" class="btn rounded-circle btn-icon-only btn-icon btn-primary btn-sharebar" target="_blank">
              <i class="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="whatsapp://send?text=https://babycalc.info/" class="btn rounded-circle btn-icon-only btn-icon btn-primary btn-sharebar">
              <i class="fa fa-whatsapp"></i>
            </a>
          </li>


          <li>
            <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://babycalc.info/." class="btn rounded-circle btn-icon-only btn-icon btn-primary btn-sharebar" target="_blank">
              <i class="fa fa-envelope"></i>
            </a>
          </li>
          <li>
            <a href="https://telegram.me/share/url?url=https://babycalc.info/&text=Baby%20gender%20prediction%20calculator" class="btn rounded-circle btn-icon-only btn-icon btn-primary btn-sharebar" target="_blank">
              <i class="fa fa-telegram"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
.sharebar{
  &__header{

  }

  &__link-list{
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    li{
      text-align: center;
      flex-basis: 100%;
    }
  }
}
.btn-sharebar{
  line-height: 3rem!important;
  width: 3rem!important;
  height: 3rem!important;
  font-size: 1.3rem!important;
}

</style>

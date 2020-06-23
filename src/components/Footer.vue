<template>
  <section class="footer">
    <div class="container">
      <h5 class="text-center mb-5" v-text="$ml.with('VueJS').get('developersAndDonate')"/>
      <hr />
      <div class="about">
         <div  class="row justify-content-between">
           <div class="col-5 text-center data-input-wrap">
             <div class="footer-text mb-3 " v-text="$ml.with('VueJS').get('writeDevsText2')"/>
             <div>
               <base-button class="btn rounded-circle btn-icon-only btn-icon btn-info btn-sharebar" type="info" v-b-modal.modal-feedback>
                 <i class="fa fa-commenting"></i>
               </base-button>
               <b-modal id="modal-feedback" title="BootstrapVue" hide-footer centered :header-bg-variant="modalHeaderBcg" :header-text-variant ="modalHeaderText">
                 <template v-slot:modal-title>
                   <span v-text="$ml.with('VueJS').get('writeDevsTitle')"/>
                 </template>
                 <p class="text-center" v-text="$ml.with('VueJS').get('writeDevsText1')"/>
                 <p class="text-center mb-5" v-text="$ml.with('VueJS').get('writeDevsText2')"/>
                 <div class="text-center mb-5">
                   <a href="mailto:babycalcforecast@gmail.com" class="btn btn-icon btn-primary">
                     <span class="btn-inner--icon">
                       <i class="fa fa-envelope"></i>
                     </span>
                     <span class="btn-inner--text" v-text="$ml.with('VueJS').get('mailButton')"/>
                   </a>
                 </div>
               </b-modal>
             </div>
           </div>
           <div class="col-5 text-center data-input-wrap">
             <div class="footer-text mb-3" v-text="$ml.with('VueJS').get('donateDevsText3')"/>
             <div>
               <base-button class="btn rounded-circle btn-icon-only btn-icon btn-warning btn-sharebar"  type="warning" v-b-modal.modal-donate>
                 <i class="fa fa-money"></i>
               </base-button>
               <b-modal id="modal-donate" title="BootstrapVue" hide-footer centered :header-bg-variant="modalHeaderBcg" :header-text-variant ="modalHeaderText">
                 <template v-slot:modal-title>
                   <span v-text="$ml.with('VueJS').get('donateDevsTitle')"/>
                 </template>
                 <p class="text-center mb-5" v-text="$ml.with('VueJS').get('donateDevsText1')"/>
                 <div class="text-center mb-5">
                   <a href="https://www.paypal.me/greencityarcher" class="btn btn-icon btn-warning" target="_blank">
                     <span class="btn-inner--icon">
                       <i class="fa fa-money"></i>
                     </span>
                     <span class="btn-inner--text" v-text="$ml.with('VueJS').get('donateButton')"/>
                   </a>
                 </div>
                 <p class="text-center mb-5" v-text="$ml.with('VueJS').get('donateDevsText2')"/>
               </b-modal>
             </div>
           </div>

         </div>
       </div>
    </div>
  </section>
</template>

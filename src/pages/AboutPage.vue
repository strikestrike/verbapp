<template>
  <q-page class="flex flex-center" style="min-height: 540px">
    <div class="q-pa-md container">
      <q-card class="fit no-shadow" bordered>
        <q-card-section class="text-h6 q-pb-none">
          <q-item>
            <q-item-section avatar class="">
              <q-icon
                class="icon"
                name="info"
                style="font-size: 24px; flex: 0 1 0%"
              />
            </q-item-section>

            <q-item-section>
              <div class="text-h6">About app</div>
            </q-item-section>
          </q-item>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <p>
            The Best Irregular Verbs provides a list of irregular verbs of the
            English language divided into categories. Check if you remember all
            the verbs and their past forms from the OK list (easier) and then go
            to the HARDER list to upgrade your knowledge.
          </p>
          <p>
            Learn PRONUNCIATIONS<br />
            Listen to the pronunciations of the verbs as many times as you want
            and memorise them.
          </p>
          <p>
            It is for EVERYONE<br />
            Start learning from scratch, test your knowledge, revise before an
            exam, or simply prove that you are the master of the English
            irregular verbs! It is all for free!
          </p>
          <p>
            It is for SCHOOLS<br />
            Choose from GRADE 5 to GRADE 8 to find readymade lists of the
            irregular verbs required by the school curriculum.
          </p>
          <p>
            Choose your EXERCISE<br />
            The exercises work independently so there is no need fill one to get
            to another. There are no levels. You will be asked to fill in the
            missing verbs in COLUMNS and in GAP MIXes. You can SHUFFLE the
            verbs, or create YOUR LIST of the irregular verbs and enjoy the same
            set of exercises. You can always reset the list and make the one
            which fits better your current level of knowledge.
          </p>
          <p>
            STUDY more than 200 irregular verbs! Suitable for IELTS, TOEFL,
            TOEIC, ESL learners.
          </p>
        </q-card-section>
      </q-card>
      <q-card class="fit no-shadow q-mt-md" bordered>
        <q-card-section class="text-h6 q-pb-none">
          <q-item>
            <q-item-section avatar class="">
              <q-icon
                class="icon"
                name="email"
                style="font-size: 24px; flex: 0 1 0%"
              />
            </q-item-section>

            <q-item-section>
              <div class="text-h6">Contact</div>
            </q-item-section>
          </q-item>
        </q-card-section>
        <q-card-section class="q-pt-none">
          mwasniowska@gmail.com
        </q-card-section>
        <q-separator></q-separator>

        <q-card-actions class="justify-start row">
          <q-btn
            class="non-selectable no-outline text-primary"
            icon="open_in_new"
            flat
            >&nbsp;WRITE EMAIL</q-btn
          >
        </q-card-actions>
      </q-card>
      <q-card class="fit no-shadow q-mt-md" bordered>
        <q-card-section class="text-h6 q-pb-none">
          <q-item>
            <q-item-section avatar class="">
              <q-icon
                class="icon"
                name="code"
                style="font-size: 24px; flex: 0 1 0%"
              />
            </q-item-section>

            <q-item-section>
              <div class="text-h6">Developer</div>
            </q-item-section>
          </q-item>
        </q-card-section>
        <q-card-section class="q-pt-none"> Hubert Parzych </q-card-section>
      </q-card>
      <q-card class="fit no-shadow q-mt-md" bordered>
        <q-card-section class="text-h6 q-pb-none">
          <q-item>
            <q-item-section>
              <div class="text-h6">
                Privacy Policy for The Best Irregular Verbs and The Irregular
                Verbs App
              </div>
            </q-item-section>
          </q-item>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <p>
            The Irregular Verbs mobile app and its affiliated website, The Best
            Irregular Verbs, (together referred to as “the app”) is an app
            designed to help users learn and practice English irregular verbs.
            The app provides comprehensive lists of irregular verbs along with
            their past simple and past participle forms, translations, and
            exercises for practice. This privacy policy outlines the information
            that we collect and how we use it to improve the app user
            experience.
          </p>
          <h5 class="q-my-sm text-subtitle1">Information Collected</h5>
          <p>
            The app collects anonymous usage data using Google Analytics. This
            data includes information such as app usage, page views, clicks, and
            other interactions with the app. We do not collect or share any
            personally identifiable information with third-party services.
          </p>
          <p>
            We also allow users to save a customized list of selected verbs,
            which is stored locally on their devices. We do not collect or share
            this data with third-party services.
          </p>
          <h5 class="q-my-sm text-subtitle1">Use of Information</h5>
          <p>
            We use the anonymous data collected through Google Analytics to
            improve the app and its features for a better user experience. The
            customized verb lists are solely used for the user’s convenience,
            and are not shared with third-party services.
          </p>
          <h5 class="q-my-sm text-subtitle1">Agreement to Privacy Policy</h5>
          <p>
            By using the app, you agree to the terms outlined in this privacy
            policy. If you have any questions or concerns about this privacy
            policy or our data practices, please contact us at
            mwasniowska<span>@</span>gmail.com.
          </p>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutPage",
});
</script>

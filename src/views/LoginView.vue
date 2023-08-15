<script setup>
import { useForm, useField } from 'vee-validate'
import { useFirebaseAuth } from 'vuefire';
import { signInWithEmailAndPassword  } from 'firebase/auth'
import { loginSchema } from '../validation/loginSchema'

const { handleSubmit }  = useForm({ validationSchema: loginSchema })
const auth = useFirebaseAuth()

const email = useField('email')
const password = useField('password')

const submit = handleSubmit((values)=>{
   signInWithEmailAndPassword(auth,values.email,values.password)
        .then((userCredential)=>{
           console.log(userCredential)
        })
        .catch(error => {
         console.log(error.code)
         console.log(error.message)
        })
})

</script>

<template>
  <v-card
      flat 
      max-width="600"
      class="mx-auto my-10"
  >
    <v-card-title 
       class="text-h4 font-weight-bold"
       tag="h3"
    >
        Iniciar sesión
    </v-card-title>
     <v-card-subtitle class="text-h5">
        Inicia Sesión con tu cuenta
     </v-card-subtitle>
     <v-form class="mt-5">
        <v-text-field
           type="email"
           label="Email"
           class="mb-3"
           bg-color="blue-grey-lighten-5"
           v-model="email.value.value"
           :error-messages="email.errorMessage.value"
        />
        <v-text-field
           type="password"
           label="Password"
           class="mb-3"
           bg-color="blue-grey-lighten-5"
           v-model="password.value.value"
           :error-messages="password.errorMessage.value"
        />

        <v-btn block color="pink-accent-3"
               @click="submit"
        >
            Iniciar Sesión
        </v-btn>
        
     </v-form>
  </v-card>
</template>
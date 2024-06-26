<template>
    <q-page class="q-pa-md">
      <q-card>
        <q-card-section>
          <div class="text-h6">Cuaca</div>
          <q-input v-model="city" placeholder="Masukkan kota" />
          <q-btn label="Cari" @click="getWeather" />
        </q-card-section>
        <q-card-section>
          <div v-if="weather">
            <div>Lokasi: {{ weather.name }}</div>
            <div>Temperatur: {{ weather.main.temp }}°C</div>
            <div>Deskripsi: {{ weather.weather[0].description }}</div>
          </div>
        </q-card-section>
      </q-card>
    </q-page>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        city: '',
        weather: null
      };
    },
    methods: {
      async getWeather() {
        const apiKey = 'd298c515fe18c45c2707834b3439d31d'; 
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${apiKey}`);
        this.weather = response.data;
      }
    },
    mounted() {
      this.getWeather();
    }
  };
  </script>
  
  <style scoped>
  .q-card {
    max-width: 400px;
    margin: 0 auto;
  }
  </style>
  
  
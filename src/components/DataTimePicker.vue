<template>
    <div class="p-4">
      <div class="flex justify-center items-center flex-col space-y-4">
        <h2 class="text-lg font-bold text-white">Seleccione el día y la hora</h2>
        <div class="flex space-x-4">
          <div v-for="day in days" :key="day" class="cursor-pointer">
            <div
              :class="['p-2 rounded-full', selectedDay === day ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-black']"
              @click="selectDay(day)"
            >
              {{ day }}
            </div>
          </div>
        </div>
        <div class="flex space-x-4">
          <div v-for="time in times" :key="time" class="cursor-pointer">
            <div
              :class="['p-2 rounded-lg', selectedTime === time ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-black']"
              @click="selectTime(time)"
            >
              {{ time }}
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center space-y-4">
          <div class="flex items-center space-x-2">
            <label for="tickets" class="text-lg text-white">Número de entradas:</label>
            <input 
              id="tickets"
              type="number"
              v-model="ticketCount"
              min="1"
              class="p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            @click="proceedToPayment"
            class="bg-yellow-500 text-black py-2 px-4 rounded-lg"
          >
            Proceder a pagar
          </button>
        </div>
        <div v-if="showPayment" class="mt-4">
          <h2 class="text-lg font-bold text-white">Detalle del pago</h2>
          <p class="text-white items-start">Total Entradas: {{ ticketCount }}</p>
          <p class="text-white items-start">Pago Total: ${{ ticketCount * ticketPrice }}</p>
          <button
            @click="completePayment"
            class="bg-green-500 text-white py-2 px-4 rounded-lg mt-4"
          >
            Pagar ahora
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import jsPDF from 'jspdf';
  
  export default {
    data() {
      return {
        days: ['10 Mar', '11 Mar', '12 Mar', '13 Mar', '14 Mar'],
        times: ['11:00', '12:30', '14:30', '16:30', '18:30'],
        selectedDay: null,
        selectedTime: null,
        ticketCount: 1,
        ticketPrice: 10, // Precio por entrada
        showPayment: false,
      };
    },
    methods: {
      selectDay(day) {
        this.selectedDay = day;
      },
      selectTime(time) {
        this.selectedTime = time;
      },
      proceedToPayment() {
        if (!this.selectedDay || !this.selectedTime) {
          alert("Por favor seleccione una fecha y una hora.");
          return;
        }
        this.showPayment = true;
      },
      completePayment() {
        alert(`¡Pago de $${this.ticketCount * this.ticketPrice} exitoso!`);
        this.generatePDF();
        this.resetSelection();
      },
      generatePDF() {
        const doc = new jsPDF();
        const purchaseDate = new Date().toLocaleString();
  
        doc.text('Recibo de pago', 10, 10);
        doc.text(`Fecha de compra: ${purchaseDate}`, 10, 20);
        doc.text(`Fecha: ${this.selectedDay}`, 10, 30);
        doc.text(`Hora de la función: ${this.selectedTime}`, 10, 40);
        doc.text(`Número de entradas: ${this.ticketCount}`, 10, 50);
        doc.text(`Total: $${this.ticketCount * this.ticketPrice}`, 10, 60);
  
        doc.save('detalle-pago.pdf');
      },
      resetSelection() {
        this.selectedDay = null;
        this.selectedTime = null;
        this.ticketCount = 1;
        this.showPayment = false;
      },
    },
  };
  </script>
 
  
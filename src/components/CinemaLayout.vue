<template>
  <div class="flex flex-col items-center p-5 w-full">
    <div class="flex justify-center w-full mb-2">
      <div class="w-4 h-4 m-1"></div>
      <div v-for="col in cols" :key="col" class="w-4 h-4 m-1 text-center text-xs text-white">
        {{ col }}
      </div>
    </div>
    <div v-for="(row, rowIndex) in seats" :key="rowIndex" class="flex items-center justify-center w-full">
      <div class="w-4 h-4 m-1 text-center text-xs text-white">
        {{ String.fromCharCode(65 + rows - rowIndex - 1) }}
      </div>
      <div v-for="(seat, seatIndex) in row" :key="seatIndex" 
           :class="['w-4 h-4 m-1 cursor-pointer', seat.type]"
           @click="selectSeat(rowIndex, seatIndex)">
        <svg v-if="seat.type === 'occupied'" class="w-full h-full">
          <svg width="100%" height="100%" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_6)">
              <path d="M39 19V36C39 37.1 38.1 38 37 38H31V19C31 17.9 31.9 17 33 17H37C38.1 17 39 17.9 39 19ZM6 17H2C0.9 17 0 17.9 0 19V36C0 37.1 0.9 38 2 38H8V19C8 17.9 7.1 17 6 17ZM34 15V3C34 1.3 32.7 0 31 0H8C6.3 0 5 1.3 5 3V15H6C8.2 15 10 16.8 10 19V21H29V19C29 16.8 30.8 15 33 15H34ZM9 38H30V23H9V38Z" fill="#EAB308"/>
            </g>
            <defs>
              <clipPath id="clip0_1_6">
                <rect width="39" height="38" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </svg>
        <svg v-else-if="seat.type === 'available'" class="w-full h-full">
          <svg width="100%" height="100%" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_10)">
              <path d="M39 19V36C39 37.1 38.1 38 37 38H31V19C31 17.9 31.9 17 33 17H37C38.1 17 39 17.9 39 19ZM6 17H2C0.9 17 0 17.9 0 19V36C0 37.1 0.9 38 2 38H8V19C8 17.9 7.1 17 6 17ZM34 15V3C34 1.3 32.7 0 31 0H8C6.3 0 5 1.3 5 3V15H6C8.2 15 10 16.8 10 19V21H29V19C29 16.8 30.8 15 33 15H34ZM9 38H30V23H9V38Z" fill="#4B5563"/>
            </g>
            <defs>
              <clipPath id="clip0_1_10">
                <rect width="39" height="38" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </svg>
        <svg v-else-if="seat.type === 'empty'" class="w-full h-full"></svg>
      </div>
    </div>
    <div class="mt-8 w-full h-1 bg-white rounded-full"></div>
    <div class="mt-4 flex justify-around w-full text-center">
      <div class="flex items-center">
        <div class="w-3 h-3 bg-yellow-600 mr-2 rounded-full"></div>
        <span class="text-xs text-white">Ocupado</span>
      </div>
      <div class="flex items-center">
        <div class="w-3 h-3 bg-gray-600 mr-2 rounded-full"></div>
        <span class="text-xs text-white">Disponible</span>
      </div>
      <div class="flex items-center">
        <div class="w-3 h-3 bg-red-800 mr-2 rounded-full"></div>
        <span class="text-xs text-white">No disponible</span>
      </div>
      <div class="flex items-center">
        <div class="w-3 h-3 bg-blue-800 mr-2 rounded-full"></div>
        <span class="text-xs text-white">Discapacitados</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const rows = 12;
const cols = 16;
const seatTypes = ["occupied", "available", "empty"];

const generateSeats = (rows, cols) => {
  return Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => ({
      type: seatTypes[Math.floor(Math.random() * seatTypes.length)],
    }))
  );
};

const seats = ref(generateSeats(rows, cols));

const selectSeat = (rowIndex, seatIndex) => {
  const seat = seats.value[rowIndex][seatIndex];
  if (seat.type === "available") {
    seat.type = "occupied";
  }
};
</script>

<style scoped>
.w-4 { width: 1rem; height: 1rem; }
.m-1 { margin: 0.25rem; }
.cursor-pointer { cursor: pointer; }
</style>

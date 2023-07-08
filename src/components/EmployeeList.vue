<template>
    <div>
      <canvas class="canvas"></canvas>
      <ul class="user-wrapper">
        <li class="users-li" v-for="(employee, index) in employees" :key="employee.id" >
          <img class="user-img" :src="employee.avatar" alt="profilbild">
          <canvas class="background-canvas" :style="{ backgroundColor: index % 2 === 0 ? color1 : color2 }"></canvas>
          <p class="fullname">{{ employee.first_name }} {{ employee.last_name }}</p>
          <a class="contact" :href="'mailto:' + employee.email" :style="{ backgroundColor: index % 2 === 0 ? color1 : color2 }"  >Kontakt</a>
        </li>
      </ul>
    </div>
  </template>
  

  <script src="../utils/EmployeeListScript"></script>

  
  
  
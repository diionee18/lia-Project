<template>
  <div>
    <ul class="user-wrapper">
      <li class="users-li" v-for="employee in employees" :key="employee.id">
        <img class="user-img" :src="employee.avatar" alt="profilbild">
       <p class="fullname"> {{  employee.first_name }} {{ employee.last_name }} </p>
        <a :href="'mailto:' + employee.email">Kontakt</a>
      </li>
    </ul>
</div>
</template>

  <script src="../utils/EmployeeListScript"></script>

  
  
  
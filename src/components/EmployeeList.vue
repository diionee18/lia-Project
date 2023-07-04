<template>
    <div>
        <ul>
        <li v-for="employee in employees" :key="employee.id" >
            <img :src="employee.avatar" alt="profilbild" width="50" height="50" style="border-radius: 50%;">
            {{ employee.first_name }} {{ employee.last_name }}
            <a :href="'mailto:' + employee.email">Kontakt</a>
        </li>
    </ul>
    </div>
</template>

<script src="../utils/EmployeeListScript"></script>
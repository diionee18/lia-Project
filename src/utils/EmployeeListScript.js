export default {
    data() {
      return {
        employees: [],
        currentPage: this.intialPage,
        totalPages: null,
        color1: '#d476b8', 
        color2: '#20478e'

      };
    },
  
    mounted() {
      this.fetchEmployees();
    },
    methods: {
      fetchEmployees() {
        fetch(`https://reqres.in/api/users?page`)
          .then(response => response.json())
          .then(data => {
            this.employees = data.data.map(employee => ({
              ...employee,
            }));
            this.totalPages = data.total_pages;
          })
          .catch(error => {
            console.error('Ett fel har inträffat: ' + error.message)
          })
      }
    },
  };
  
<template>
  <v-app>
  <v-table id="firstTable">
            <thead>
              <tr>
                <th>ID</th>
                <th style="width: 300px;">Name</th>
                <th v-for="n in 31" :key= "n">{{n}}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in rows" :key="row">
                <td>{{row.id}}</td>
                <td style="width: 300px;">{{row.name}}</td>
                <td v-for="attendence in 31" :key="attendence">{{row.attendence}}</td>
              </tr>
            </tbody>
        </v-table>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        rows: [
      {id: 1, name: 'Arslan Hanif', attendence: 'p'},
      {id: 2, name: 'Haseeb', attendence: 'p'},
      {id: 3, name: 'Faizan', attendence: 'p'},
      {id: 4, name: 'Imad', attendence: 'p'},
      {id: 5, name: 'Naseeb', attendence: 'p'},
      {id: 6, name: 'Bilal', attendence: 'P'}
        ]
      }
    }
  }
</script>
<style>
            #firstTable {
            font-family: 'Open Sans', sans-serif;
            border-collapse: collapse;
            border: 3px solid #44475C;
            margin: 10px 10px 0 10px;
            width: 70%;
          }

          #firstTable th {
            text-transform: uppercase;
            text-align: left;
            background: #44475C;
            color: rgb(226, 216, 216);
            padding: 8px;  
          }
          #firstTable td {
            text-align: left;
            padding: 8px;
            border-right: 2px solid #7D82A8; 
          }        
</style>
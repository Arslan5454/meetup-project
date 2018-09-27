<template>
  <v-app>
    {{getCurrentMonth}}
  <table id="firstTable">
            <thead>
              <tr>
                <th>ID</th>
                <th style="width: 300px;">Name</th>
                <th v-for="n in 31" :key= "n">{{n}}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in rows" :key="i">
                <td>{{row.id}}</td>
                <td style="width: 300px;">{{row.name}}</td>
                <td v-for="attendence in 31" :key="attendence">{{row.attendence}}</td>
              </tr>
            </tbody>
        </table>
        <v-flex xs12 sm6 md4>
       <v-menu
        ref="menu2"
        :close-on-content-click="false"
        v-model="menu2"
        :nudge-right="40"
        :return-value.sync="date"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px"
      >
        <v-text-field
          slot="activator"
          v-model="date"
          label="Month"
          prepend-icon="event"
          readonly
        ></v-text-field>
        <v-date-picker type="month" v-model="date" @input="$refs.menu2.save(date)"></v-date-picker>

      </v-menu>
    </v-flex>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        date: '',
        menu2: false,
        rows: [
      {id: 1, name: 'Arslan Hanif', attendence: 'p'},
      {id: 2, name: 'Haseeb', attendence: 'p'},
      {id: 3, name: 'Faizan', attendence: 'p'},
      {id: 4, name: 'Imad', attendence: 'p'},
      {id: 5, name: 'Naseeb', attendence: 'p'},
      {id: 6, name: 'Bilal', attendence: 'P'}
        ]
      }
    },
    computed: {
      getCurrentMonth () {
        let getYearAndMonth = this.date.split('-')
        console.log(getYearAndMonth)
        return new Date(getYearAndMonth[0], getYearAndMonth[1], 0).getDate()
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
<template>
  <v-layout row wrap>
    <v-flex md12 v-if="date !== ''">
      <v-data-table id="firstTable"
        :items="rows"
        hide-actions
        class="elevation-1">
        <template slot="headers" slot-scope="props">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th v-for="n in getCurrentMonth" :key= "n">{{n}}</th>
          </tr>
        </template>
        <template slot="items" slot-scope="props">
          <td>{{ props.item.id }}</td>
          <td>{{ props.item.name }}</td>
          <td v-for="(item, i) in getCurrentMonth" :key="i"> P </td>
        </template>
      </v-data-table>
  </v-flex>
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
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        date: '',
        menu2: false,
        // header: [
        //   {
        //     text: 'Id',
        //     align: 'left',
        //     sortable: false,
        //     value: 'id'
        //   },
        //   { text: 'Name', value: 'name' }
        // ],
        rows: [
      {value: false, id: 1, name: 'Arslan Hanif'},
      {value: false, id: 2, name: 'Haseeb'},
      {value: false, id: 3, name: 'Faizan'},
      {value: false, id: 4, name: 'Imad'},
      {value: false, id: 5, name: 'Naseeb'},
      {value: false, id: 6, name: 'Bilal'},
      {value: false, id: 7, name: 'Ehtisham'}
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
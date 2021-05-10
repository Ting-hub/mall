<template>
<div>
  <div  v-for="table in itemparamsrule.tables" :key="table.key">
    <table class="infotable" v-for="(item,index) in table" :key="index">
      <tr>
        <td v-for="(item,index) in item" :key="index">{{item}}</td> 
      </tr>
    </table>
  </div>

  <table class="ruletable" v-for="(info,index) in itemparamsinfo.set" :key="index">
    <tr>
      <td class="rule-tr">{{info.key}}</td>
      <td class="rule-td">{{info.value}}</td>
    </tr>
  </table>

</div>
</template>

<script>
export default {
props:{
  itemparamsrule:{
    type:Object,
    default:{}
  },
  itemparamsinfo:{
    type:Object,
    default:{}
  }
}
}
</script>

<style scoped>
.infotable{
  width: 100%;
  text-align: center;
  table-layout: fixed;
  font-size: 15px;
  vertical-align: center;
  border-bottom:2px solid #f2f5f8 ;

}
.infotable tr{
height: 55px;
}
.ruletable{
  width: 100%;
  text-align: left;
  table-layout: fixed;
  font-size: 15px;
  vertical-align: center;
  border-bottom:2px solid #f2f5f8 ;
}
.ruletable tr{
  height: 55px;
}
.rule-tr{
padding-left: 28.6px;
}
.rule-td{
color: var(--color-high-text);
}

</style>
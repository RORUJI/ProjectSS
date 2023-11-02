<template>
    <div class="container">
        <div  class="row d-flex justify-content-center">
            <h2 class="d-flex justify-content-center">Get All Hospitals</h2>
            <h4 class="d-flex justify-content-center">จำนวนโรงพยาบาล{{  hospitals.length  }}</h4>
            <div class="d-flex justify-content-center" style="margin-bottom: 1vh;">
                <button  class="btn btn-success" v-on:click="navigateTo('/hospital/create')">เพิ่มข้อมูล</button>
            </div>
            <div v-for="hospital in hospitals" v-bind:key="hospital.id" style="border: solid 1px; border-radius: 10px; background-color:rgb( 255, 217, 217
);">
                <div
                style=" margin-left: 40vh; 
                        margin-right: 40vh;">
                    <div class="d-flex justify-content-center">id: {{  hospital.id }}</div>
                    <div class="d-flex justify-content-center">ชื่อโรงพยาบาล {{  hospital.name }} </div>
                    <div class="d-flex justify-content-center">ราคา: {{  hospital.price }}</div>
                    <div class="d-flex justify-content-center">ขนาดห้อง: {{ hospital.room_size }}</div>
                    <div class="d-flex justify-content-center">ขนาดเตียง: {{ hospital.bed_size }}</div>
                    <div class="d-flex justify-content-center">ประเภทห้อง: {{ hospital.type }}</div>
                    <div class="col d-flex justify-content-center"></div>
                </div>
                <div
                    style=" margin-left: 40vh; 
                            margin-right: 40vh;
                            text-align: center;">
                    <p>
                        <button class="btn btn-success"  v-on:click="navigateTo('/hospital/' + hospital.id)">ดูข้อมูลโรงพยาบาล</button>
                        <button class="btn btn-warning" v-on:click="navigateTo('/hospital/edit/'+hospital.id)">แก้ไขข้อมูล</button>
                        <button class="btn btn-danger" v-on:click="deleteHospital(hospital)">ลบข้อมูล</button>
                    </p>
                </div>   
            </div>
        </div>
    </div>
</template>
<script>
import HospitalsService from '@/services/HospitalsService';
    export default {
        data () {
            return {
                hospitals: []
            }
        },
        async created () {
            this.hospitals = (await HospitalsService.index()).data
        },
        methods: {
            navigateTo (route) {
                this.$router.push(route)
            },
            async deleteHospital (hospital) {
                let result  = confirm("What to delete?")
                if (result) {
                    try{
                        await HospitalsService.delete(hospital)
                        this.refreshData();
                    }catch (error) {
                        console.log(error)
                    }
                }
            },
            async refreshData() {
                this.hospitals = (await HospitalsService.index()).data
            }
        }
    }
</script>
<style scoped>

</style>
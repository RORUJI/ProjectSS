<template>
    <div class="container">
        <div class="row d-flex justify-content-center">
            <h1 class="d-flex justify-content-center">Create Hospital</h1>
            <div style="border: solid 1px; border-radius: 10px; padding-top: 2vh; background-color:rgb( 255, 217, 217);">
                <form v-on:submit.prevent = "createHospital">
                    <p class="d-flex justify-content-center input-group input-group-sm mb-3" >ชื่อโรงพยาบาล: <input class="form-control" type="text" v-model="hospital.name"></p>
                    <p class="d-flex justify-content-center input-group input-group-sm mb-3">ราคา: <input class="form-control" type="text" v-model="hospital.price"></p>
                    <p class="d-flex justify-content-center input-group input-group-sm mb-3">ขนาดห้อง: <input class="form-control" type="text" v-model="hospital.room_size"></p>
                    <p class="d-flex justify-content-center input-group input-group-sm mb-3">ขนาดเตียง: <input class="form-control" type="text" v-model="hospital.bed_size"></p>
                    <p class="d-flex justify-content-center input-group input-group-sm mb-3">ประเภทห้อง: <input class="form-control" type="text" v-model="hospital.type"></p>
                    <p class="d-flex justify-content-center input-group input-group-sm mb-3"><button class="btn btn-warning form-control" type="submit">Create Hospital</button></p>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import HospitalsService from '../../services/HospitalsService';

export default {
        data () {
            return {
                hospital: {
                    name: '',
                    price: '',
                    room_size: '',
                    bed_size: '',
                    type: '',
                }
            }
        },
        methods: {
            async createHospital () {
                try {
                    await HospitalsService.post(this.hospital)
                    this.$router.push({
                        name: 'hospitals'
                    })
                }catch (error) {
                    console.log(error)
                }
            }
        }
    }
</script>
<style scoped>

</style>
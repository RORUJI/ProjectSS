<template>
    <div class="container">
        <div class="row d-flex justify-content-center">
            <h1 class="d-flex justify-content-center">Show Hospital</h1>
            <div style="border: solid 1px; border-radius: 10px; padding-top: 2vh; background-color:rgb( 255, 217, 217);">
                <p class="d-flex justify-content-center input-group input-group-sm mb-3">Hospital ID: {{ hospital.id }}</p>
                <p class="d-flex justify-content-center input-group input-group-sm mb-3">ชื่อโรงพยาบาล: <input class="form-control" type="text" v-model="hospital.name"></p>
                <p class="d-flex justify-content-center input-group input-group-sm mb-3">ราคา: <input class="form-control" type="text" v-model="hospital.price"></p>
                <p class="d-flex justify-content-center input-group input-group-sm mb-3">ขนาดห้อง: <input class="form-control" type="text" v-model="hospital.room_size"></p>
                <p class="d-flex justify-content-center input-group input-group-sm mb-3">ขนาดเตียง: <input class="form-control" type="text" v-model="hospital.bed_size"></p>
                <p class="d-flex justify-content-center input-group input-group-sm mb-3">ประเภทห้อง: <input class="form-control" type="text" v-model="hospital.type"></p>
                <p class="d-flex justify-content-center input-group input-group-sm mb-3"><button class="btn btn-danger form-control" v-on:click="navigateTo('/hospitals/')">กลับ</button></p>
            </div>
        </div>
    </div>
</template>
<script>
import HospitalsService from '@/services/HospitalsService';

export default {
        data () {
            return {
                hospital: null
            }
        },
        async created () {
            try {
                let hospitalId = this.$route.params.hospitalId
                this.hospital = (await HospitalsService.show(hospitalId)).data
            }catch (error) {
                console.log (error)
            }
        },
        methods: {
            navigateTo (route) {
                this.$router.push(route)
            },
        }

    }
</script>
<style scoped>

</style>
<template>
    <div>
        <div>
            <h1>Show Hospital</h1>
            <p>Hospital ID: {{ hospital.id }}</p>
            <p>ชื่อโรงพยาบาล: <input type="text" v-model="hospital.name"></p>
            <p>ราคา: <input type="text" v-model="hospital.price"></p>
            <p>ขนาดห้อง: <input type="text" v-model="hospital.room_size"></p>
            <p>ขนาดเตียง: <input type="text" v-model="hospital.bed_size"></p>
            <p>ประเภทห้อง: <input type="text" v-model="hospital.type"></p>
            <p><button v-on:click="navigateTo('/hospitals/')">กลับ</button></p>

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
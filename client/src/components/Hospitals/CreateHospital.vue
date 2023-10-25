<template>
    <div>
        <h1>Create Hospital</h1>
        <form v-on:submit.prevent = "createHospital">
            <p>ชื่อโรงพยาบาล: <input type="text" v-model="hospital.name"></p>
            <p>ราคา: <input type="text" v-model="hospital.price"></p>
            <p>ขนาดห้อง: <input type="text" v-model="hospital.room_size"></p>
            <p>ขนาดเตียง: <input type="text" v-model="hospital.bed_size"></p>
            <p>ประเภทห้อง: <input type="text" v-model="hospital.type"></p>
            <p><button type="submit">Create Hospital</button></p>
        </form>
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
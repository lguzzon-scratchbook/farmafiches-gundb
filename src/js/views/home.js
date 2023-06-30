import { onMount } from 'svelte';
import { ficheService } from '../services/ficheService.js';

let fiches = [];

onMount(async () => {
    try {
        fiches = await ficheService.loadFiches();
    } catch (error) {
        console.error('Failed to load fiches', error);
    }
});

export default {
    data() {
        return {
            fiches
        }
    },
    methods: {
        viewFiche(fiche) {
            this.$router.navigate('/fiche', { fiche });
        }
    }
};
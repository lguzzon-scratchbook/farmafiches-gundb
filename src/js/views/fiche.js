import { onMount } from 'svelte';
import { ficheService } from '../services/ficheService.js';
import { analyticsService } from '../services/analyticsService.js';

let fiches = [];

onMount(async () => {
    try {
        fiches = await ficheService.loadFiches();
    } catch (error) {
        console.error('ficheLoadFailure', error);
    }
});

function viewFiche(fiche) {
    try {
        ficheService.viewFiche(fiche);
        analyticsService.saveAnalytics({ event: 'viewFiche', ficheId: fiche.id });
    } catch (error) {
        console.error('analyticsSaveFailure', error);
    }
}

export { fiches, viewFiche };
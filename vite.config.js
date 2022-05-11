import { resolve } from 'path';
import { defineConfig } from 'vite';

module.exports = defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                careers: resolve(__dirname, 'careers', 'index.html'),
                'creative-hearts-club-art-class': resolve(__dirname, 'creative-hearts-club-art-class', 'index.html'),
                faculty: resolve(__dirname, 'faculty', 'index.html'),
                'join-us': resolve(__dirname, 'join-us', 'index.html'),
                mission: resolve(__dirname, 'mission', 'index.html'),
                'chamber-ensemble-camp': resolve(__dirname, 'music-camps', 'chamber-ensemble-camp', 'index.html'),
                'performing-arts-summer-camp': resolve(__dirname, 'music-camps', 'performing-arts-summer-camp', 'index.html'),
                schedule: resolve(__dirname, 'schedule', 'index.html'),
                'online-lessons': resolve(__dirname, 'services', 'online-lessons', 'index.html'),
                'rehearsal-rooms': resolve(__dirname, 'services', 'rehearsal-rooms', 'index.html'),
                testimonials: resolve(__dirname, 'testimonials', 'index.html'),
                videos: resolve(__dirname, 'videos', 'index.html'),
            },
        },
    },
});

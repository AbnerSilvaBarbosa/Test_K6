import http from 'k6/http';
import { check, sleep } from 'k6';


// Primeiro estágio:

// Duração: 30 segundos
// Alvo (Target): 20 usuários virtuais
// Durante os primeiros 30 segundos da execução do teste, o número de usuários virtuais aumentará gradualmente para 20.
// Segundo estágio:

// Duração: 1 minuto e 30 segundos
// Alvo (Target): 10 usuários virtuais
// Após os 30 segundos iniciais, o número de usuários virtuais será reduzido para 10 e permanecerá assim por 1 minuto e 30 segundos.
// Terceiro estágio:

// Duração: 20 segundos
// Alvo (Target): 0 usuários virtuais
// Nos últimos 20 segundos do teste, todos os usuários virtuais serão encerrados, simulando a diminuição do tráfego para zero.

export const options = {
    stages: [
        { duration: '10s', target: 100 },
        { duration: '15s', target: 10 },
        { duration: '10s', target: 5 },
    ],
};

export default function () {
    const res = http.get('https://httpbin.test.k6.io/');
    check(res, { 'status was 200': (r) => r.status == 200 });
    sleep(1);
}

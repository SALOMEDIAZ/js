let allAgents = [];

async function init() {
    allAgents = await getAgents();
    renderAgents(allAgents);
}

init();
class Agente {
    constructor(nombre, rol, habilidades, imagen) {
        this.nombre = nombre;
        this.rol = rol;
        this.habilidades = habilidades;
        this.imagen = imagen;
    }
}
async function getAgents() {
    try {
        const response = await fetch('https://valorant-api.com/v1/agents');
        const data = await response.json();

       
        const agentes = data.data.filter(agent => agent.isPlayableCharacter);

       
        return agentes.map(agent => new Agente(
            agent.displayName,
            agent.role.displayName,
            agent.abilities.map(ability => ability.displayName),
            agent.fullPortrait
        ));
    } catch (error) {
        console.error('Error al obtener los agentes:', error);
    }
}
function renderAgents(agents) {
    const container = document.getElementById('agentsContainer');
    container.innerHTML = ''; 

    agents.forEach(agent => {
        const agentDiv = document.createElement('div');
        agentDiv.classList.add('agent');

        agentDiv.innerHTML = `
            <img src="${agent.imagen}" alt="${agent.nombre}">
            <h2>${agent.nombre}</h2>
            <p><strong>Rol:</strong> ${agent.rol}</p>
            <ul>
                <li><strong>Habilidades:</strong></li>
                ${agent.habilidades.map(skill => `<li>${skill}</li>`).join('')}
            </ul>
        `;

        container.appendChild(agentDiv);
    });
}
function filterAgents(agents, query) {
    return agents.filter(agent => agent.nombre.toLowerCase().includes(query.toLowerCase()));
}

document.getElementById('searchInput').addEventListener('input', (event) => {
    const query = event.target.value;
    const filteredAgents = filterAgents(allAgents, query);
    renderAgents(filteredAgents);
});



document.addEventListener('DOMContentLoaded', function() {
    const resources = {
        sql: [
            { title: 'SQL E-book 1', author: 'Author 1', link: '#' },
            { title: 'SQL Research Paper 1', author: 'Researcher 1', link: '#' },
            { title: 'SQL Tutorial 1', author: 'Tutorial Author 1', link: '#' },
        ],
        reactjs: [
            { title: 'ReactJS E-book 1', author: 'Author 2', link: '#' },
            { title: 'ReactJS Research Paper 1', author: 'Researcher 2', link: '#' },
            { title: 'ReactJS Tutorial 1', author: 'Tutorial Author 2', link: '#' },
        ],
        corejava: [
            { title: 'Core Java E-book 1', author: 'Author 3', link: '#' },
            { title: 'Core Java Research Paper 1', author: 'Researcher 3', link: '#' },
            { title: 'Core Java Tutorial 1', author: 'Tutorial Author 3', link: '#' },
        ],
        advancejava: [
            { title: 'Advanced Java E-book 1', author: 'Author 4', link: '#' },
            { title: 'Advanced Java Research Paper 1', author: 'Researcher 4', link: '#' },
            { title: 'Advanced Java Tutorial 1', author: 'Tutorial Author 4', link: '#' },
        ],
    };

    function createResourceItem(resource) {
        const div = document.createElement('div');
        div.className = 'resource-item';
        
        const title = document.createElement('h3');
        title.textContent = resource.title;
        
        const author = document.createElement('p');
        author.textContent = resource.author;
        
        const link = document.createElement('a');
        link.href = resource.link;
        link.textContent = 'View';
        link.target = '_blank';
        
        div.appendChild(title);
        div.appendChild(author);
        div.appendChild(link);
        
        return div;
    }

    Object.keys(resources).forEach(skill => {
        const container = document.getElementById(`${skill}-container`);
        resources[skill].forEach(resource => {
            container.appendChild(createResourceItem(resource));
        });
    });
});

const userComponent = (item) => {
    return `
        <div class="entry">
            <header class="entry__header">
                <h2>${item.Name}</h2>
            </header>
            <h3>${item.email}</h3>
            
            
            <button class="entry__delete" id="delete--${item.id}">Delete</button>
        </div>
        
    `
}

module.exports = userComponent
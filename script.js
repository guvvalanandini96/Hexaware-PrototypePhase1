// Event listener to add new topic row
document.querySelector('.add-topic-btn').addEventListener('click', () => {
    const form = document.querySelector('.skills-form');
    const newTopicRow = document.createElement('div');
    newTopicRow.classList.add('topic-row');
    newTopicRow.innerHTML = `
        <div class="topic-item">
            <label>Topic:</label>
            <input type="text" name="topic" value="">
        </div>
        <div class="topic-item">
            <label>Difficulty level:</label>
            <select name="difficulty">
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
        </div>
        <div class="topic-item">
            <label>Question type:</label>
            <select name="questionType">
                <option value="multiple">Multiple choice</option>
                <option value="descriptive">Descriptive</option>
            </select>
        </div>
        <button type="button" class="delete-btn">🗑️</button>
    `;
    form.insertBefore(newTopicRow, document.querySelector('.add-topic-btn'));

    // Add delete functionality to the new button
    newTopicRow.querySelector('.delete-btn').addEventListener('click', () => {
        newTopicRow.remove();
    });
});

// Add delete functionality to existing buttons
document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.target.parentElement.remove();
    });
});

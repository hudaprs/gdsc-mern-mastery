// TODO: Do general react & optimization?

// TODO: Add type definition

// TODO: Do API Integration

// TODO: Call child component

const App = () => {
  // TODO: Make common state

  /**
   * @description Fetch todo list
   *
   * @return {Promise<void>} Promise<void>
   */

  /**
   * @description Create todo
   *
   * @param {string} form.title
   *
   * @return {Promise<void>} Promise<void>
   */

  /**
   * @description Update todo
   *
   * @param {string} form.completed
   * @param {string} form.id
   *
   * @return {Promise<void>} Promise<void>
   */

  /**
   * @description Update todo
   *
   * @param {string} form.id
   *
   * @return {Promise<void>} Promise<void>
   */

  /**
   * @description Load data when came first to this component
   *
   * @return {void} void
   */

  return (
    <div id='app'>
      {/* Title */}
      <h1>Todos</h1>
      {/* End Title */}

      {/* Form */}
      {/* TODO: Do some controlled data inside this component */}
      <input
        type='text'
        placeholder='✎ What needs to be done'
        onKeyDown={async event => {
          if (event.code === 'Enter') {
            // TODO: Do some submission here
          }
        }}
      />
      {/* End Form */}

      {/* Todo List */}
      <ul>{/* TODO: Render todo list here */}</ul>

      {/* End Todo List */}
    </div>
  )
}

export default App

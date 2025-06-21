// Landing page utility functions

// Generate particle positions for background animation
export const generateParticles = (count: number) => {
  return Array.from({ length: count }, () => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 3}s`,
    duration: `${3 + Math.random() * 2}s`,
  }))
}

// Demo commands for the landing page
export const demoCommands = [
  "Add groceries to my Notion shopping list, schedule lunch with Sarah tomorrow at noon, and check if it'll rain this weekend",
  "Create a pull request for the auth feature, notify the team on Slack, and schedule a deployment for Friday",
  "Generate API documentation, update the changelog, and send a status report to stakeholders",
]

// Get a random demo command
export const getRandomDemoCommand = (): string => {
  return demoCommands[Math.floor(Math.random() * demoCommands.length)]
}

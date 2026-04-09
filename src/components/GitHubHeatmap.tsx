import GitHubCalendar from "react-github-calendar";

export function GitHubHeatmap({ username }: { username: string }) {
  const theme = {
    light: ["#e5e7eb", "#a7f3d0", "#6ee7b7", "#34d399", "#10b981"],
    dark: ["#374151", "#065f46", "#047857", "#059669", "#10b981"],
  };

  return (
    <div className="github-heatmap">
      <GitHubCalendar
        username={username}
        blockSize={10}
        blockMargin={4}
        fontSize={12}
        colorScheme="light"
        theme={theme}
        hideColorLegend={false}
        hideMonthLabels={false}
        weekStart={1}
      />
    </div>
  );
}

import GitHubCalendar from "react-github-calendar";

export function GitHubHeatmap({ username }: { username: string }) {
  const theme = {
    light: ["#e5e7eb", "#a7f3d0", "#6ee7b7", "#34d399", "#10b981"],
    dark: ["#374151", "#065f46", "#047857", "#059669", "#10b981"],
  };

  return (
    <div className="rounded-xl border p-2  flex justify-center">
      <GitHubCalendar
        username={username}
        // sizing
        blockSize={10}
        blockMargin={4}
        fontSize={12}
        // colors
        colorScheme="light"
        theme={theme}
        // UX
        hideColorLegend={false}
        hideMonthLabels={false}
        // Week starts on Monday: 1, Sunday: 0
        weekStart={1}
      />
    </div>
  );
}

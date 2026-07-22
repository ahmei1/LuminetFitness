import { api } from "./api";

const FLAG = "luminet_local_imported";

export async function maybeImportLocalData() {
  if (localStorage.getItem(FLAG)) return "";

  const localExercises = JSON.parse(localStorage.getItem("dailyExercises") || "[]");
  const localSchedules = JSON.parse(localStorage.getItem("schedules") || "[]");
  const localChallenges = JSON.parse(localStorage.getItem("challenges") || "[]");

  const [cloudEx, cloudSch, cloudCh] = await Promise.all([
    api.getExercises(),
    api.getSchedules(),
    api.getChallenges(),
  ]);

  const emptyCloud =
    !(cloudEx.exercises || []).length &&
    !(cloudSch.schedules || []).length &&
    !(cloudCh.challenges || []).length;

  const hasLocal =
    localExercises.length || localSchedules.length || localChallenges.length;

  if (!emptyCloud || !hasLocal) {
    localStorage.setItem(FLAG, "1");
    return "";
  }

  let imported = 0;
  if (localExercises.length) {
    const res = await api.importExercises(localExercises);
    imported += res.imported || 0;
  }
  if (localSchedules.length) {
    const res = await api.importSchedules(localSchedules);
    imported += res.imported || 0;
  }
  if (localChallenges.length) {
    const res = await api.importChallenges(localChallenges);
    imported += res.imported || 0;
  }

  localStorage.setItem(FLAG, "1");
  return imported
    ? `Imported ${imported} item(s) from your previous local data.`
    : "";
}

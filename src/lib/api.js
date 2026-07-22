const TOKEN_KEY = "luminet_token";

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function clearToken() {
  localStorage.removeItem(TOKEN_KEY);
}

async function request(path, options = {}) {
  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };

  const token = getToken();
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(`/api${path}`, {
    ...options,
    headers,
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  let data = null;
  const text = await res.text();
  if (text) {
    try {
      data = JSON.parse(text);
    } catch {
      data = { error: text };
    }
  }

  if (!res.ok) {
    throw new Error(data?.error || `Request failed (${res.status})`);
  }

  return data;
}

export const api = {
  signup: (body) => request("/auth/signup", { method: "POST", body }),
  login: (body) => request("/auth/login", { method: "POST", body }),
  me: () => request("/auth/me"),

  getExercises: () => request("/exercises"),
  addExercise: (body) => request("/exercises", { method: "POST", body }),
  deleteExercise: (id) => request(`/exercises/${id}`, { method: "DELETE" }),
  importExercises: (exercises) =>
    request("/exercises/import", { method: "POST", body: { exercises } }),

  getSchedules: () => request("/schedules"),
  addSchedule: (body) => request("/schedules", { method: "POST", body }),
  deleteSchedule: (id) => request(`/schedules/${id}`, { method: "DELETE" }),
  importSchedules: (schedules) =>
    request("/schedules/import", { method: "POST", body: { schedules } }),

  getChallenges: () => request("/challenges"),
  addChallenge: (body) => request("/challenges", { method: "POST", body }),
  updateChallenge: (id, body) =>
    request(`/challenges/${id}`, { method: "PATCH", body }),
  resetChallenges: () => request("/challenges", { method: "DELETE" }),
  importChallenges: (challenges) =>
    request("/challenges/import", { method: "POST", body: { challenges } }),

  getStreak: () => request("/streak"),
  getPRs: () => request("/prs"),

  getBodyWeight: () => request("/body-weight"),
  addBodyWeight: (body) => request("/body-weight", { method: "POST", body }),
  deleteBodyWeight: (id) => request(`/body-weight/${id}`, { method: "DELETE" }),
};

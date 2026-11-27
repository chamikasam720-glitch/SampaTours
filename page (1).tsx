 "use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { LockKeyhole, LogOut, Plus, RefreshCw } from "lucide-react";

type Destination = { id: string; name: string; region: string | null; description: string | null; image_url: string | null };

export default function AdminPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [items, setItems] = useState<Destination[]>([]);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [region, setRegion] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  async function load() {
    if (!supabase) return;
    const { data, error } = await supabase.from("destinations").select("*").order("name");
    if (error) setMessage(error.message); else setItems(data ?? []);
  }
  useEffect(() => {
    if (!supabase) return;
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) { setLoggedIn(true); load(); }
    });
  }, []);

  async function login(e: React.FormEvent) {
    e.preventDefault();
    if (!supabase) { setMessage("Add your Supabase environment variables first."); return; }
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setMessage(error.message); else { setLoggedIn(true); load(); }
  }
  async function addDestination(e: React.FormEvent) {
    e.preventDefault();
    if (!supabase) return;
    const { error } = await supabase.from("destinations").insert({ name, region, description, image_url: image });
    if (error) setMessage(error.message);
    else { setMessage("Destination added."); setName(""); setRegion(""); setDescription(""); setImage(""); load(); }
  }
  async function remove(id: string) {
    if (!supabase || !confirm("Delete this destination?")) return;
    const { error } = await supabase.from("destinations").delete().eq("id", id);
    if (error) setMessage(error.message); else load();
  }
  async function logout() {
    if (supabase) await supabase.auth.signOut();
    setLoggedIn(false); setItems([]);
  }

  if (!supabase) return <main className="admin-wrap"><div className="admin-card"><h1>Sampa Tours Admin</h1><p>Connect your Supabase project by adding the environment variables in <code>.env.local</code>.</p></div></main>;
  if (!loggedIn) return <main className="admin-wrap"><form className="admin-card" onSubmit={login}><LockKeyhole size={30}/><h1>Admin sign in</h1><p>Sign in with an authorized Supabase admin account.</p><label>Email<input type="email" value={email} onChange={e=>setEmail(e.target.value)} required/></label><label>Password<input type="password" value={password} onChange={e=>setPassword(e.target.value)} required/></label><button className="button button-green">Sign in</button>{message && <p>{message}</p>}</form></main>;

  return <main className="admin-wrap"><div className="admin-dashboard"><div className="admin-top"><div><span className="eyebrow">SAMPA TOURS</span><h1>Content dashboard</h1></div><button className="admin-logout" onClick={logout}><LogOut size={16}/> Sign out</button></div>
    <section className="admin-panel"><h2><Plus size={19}/> Add destination</h2><form className="admin-form" onSubmit={addDestination}><label>Destination name<input value={name} onChange={e=>setName(e.target.value)} required/></label><label>Region / category<input value={region} onChange={e=>setRegion(e.target.value)}/></label><label className="full">Image URL<input value={image} onChange={e=>setImage(e.target.value)}/></label><label className="full">Description<textarea value={description} onChange={e=>setDescription(e.target.value)}/></label><button className="button button-green">Save destination</button></form></section>
    <section className="admin-panel"><div className="admin-list-heading"><h2>Destinations</h2><button onClick={load} className="admin-refresh"><RefreshCw size={15}/> Refresh</button></div>{items.length === 0 ? <p>No destinations added yet.</p> : items.map(item=><div className="admin-item" key={item.id}><div><b>{item.name}</b><span>{item.region} · {item.description}</span></div><button onClick={()=>remove(item.id)}>Delete</button></div>)}</section>
    {message && <p className="admin-message">{message}</p>}
  </div></main>;
}

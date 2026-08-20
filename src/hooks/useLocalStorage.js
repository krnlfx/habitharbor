import { useEffect, useState } from 'react';

export default function useLocalStorage(key, initial) {
 const [value, setValue] = useState(() => {
 try {
 const raw = localStorage.getItem(key);
 return raw !== null ? JSON.parse(raw) : initial;
 } catch (e) {
 return initial;
 }
 });

 useEffect(() => {
 try {
 localStorage.setItem(key, JSON.stringify(value));
 } catch (e) {
 // storage unavailable, ignore
 }
 }, [key, value]);

 return [value, setValue];
}
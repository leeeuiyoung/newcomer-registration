import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { db } from "@/firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";
// (중략) -- 원래 코드 전체 포함
export default function NewcomerRegistrationForm() {
  // ... 내용 동일
}

# **Cahier des Charges**

## **Site E-commerce de Compl'ements Alimentaires en Dropshipping**

**R'edig'e par :** Georges Dongmo  
**Date :** 8 juillet 2026  
**Version :** 1.0  
**Statut :** En validation  

---

## **'📋 Table des Mati'eres**

1. [Description du Projet](#-description-du-projet)
2. [Fonctionnalit'es](#-fonctionnalit'es)
3. [Conception de l'Architecture Backend](#-conception-de-larchitecture-backend)
4. [Choix de la Stack Technique](#-choix-de-la-stack-technique)
5. [Contraintes Techniques](#-contraintes-techniques)

---

---

## **'📌 Description du Projet**

### **1.1 Contexte et Justification**

Le march'e des **compl'ements alimentaires** conna'it une croissance exponentielle en Afrique.

### **1.2 Objectifs du Projet**

D'evelopper une plateforme e-commerce moderne pour la vente de compl'ements alimentaires en dropshipping.

#### **Objectifs Sp'ecifiques**

| **Objectif** | **Indicateur de Succ'es (KPI)** | **'Ech'eance** |
|--------------|--------------------------------|--------------|
| Lancer la plateforme en version b'eta | Site fonctionnel avec 50 produits | 3 mois |
| Atteindre 1 000 commandes/mois | Nombre de commandes mensuelles | 6 mois |

---

### **1.3 P'erim'etre du Projet**

#### **Inclus dans le projet**
- D'eveloppement d'un site web responsive
- Int'egration avec 5 fournisseurs de dropshipping
- Fiches produits ultra-d'etaill'ees
- Syst'eme de paiement s'ecuris'e

#### **Exclu du projet**
- D'eveloppement d'une application mobile native
- Stockage physique des produits

---

## **'🛠 Fonctionnalit'es**

### **2.1 Fonctionnalit'es Frontend**

#### **Gestion du Catalogue Produits**
- Recherche avanc'ee
- Fiches produits d'etaill'ees
- Comparateur de produits

#### **Panier et Processus d'Achat**
- Panier persistant
- Paiement s'ecuris'e (Stripe, PayPal, Mobile Money)

---

## **'🏗️ Conception de l'Architecture Backend**

### **3.1 Choix de l'Architecture**

**Architecture Retenue : Serverless + Modulaire**

**Pourquoi ce choix ?**
- Scalabilit'e : Supporter 10 000 utilisateurs simultan'es
- Co'ut : Mod'ele pay-as-you-go
- Maintenance : Pas de serveur 'a g'erer

---

## **'💻 Choix de la Stack Technique**

### **4.1 Langage de Programmation**
**TypeScript** - Full-stack JavaScript, typage statique

### **4.2 Framework**
- **Frontend**: Next.js (SSR/ISR pour SEO, PWA)
- **Backend**: Supabase Edge Functions + Vercel Edge Functions

### **4.3 Base de Donn'ees**
**Supabase (PostgreSQL)** - Open-source, scalable, Realtime, RLS

### **4.4 Synth'ese de la Stack Technique**

| **Couche** | **Technologie** | **R'ole** |
|------------|----------------|----------|
| Langage | TypeScript | D'eveloppement full-stack |
| Framework Frontend | Next.js | Interface utilisateur |
| Framework Backend | Supabase Edge Functions | Logique m'etier |
| Base de Donn'ees | Supabase (PostgreSQL) | Persistance des donn'ees |
| Authentification | Clerk | Gestion des utilisateurs |
| Paiements | Stripe + PayPal | Transactions |
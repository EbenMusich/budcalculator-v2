"use client";

import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";

export default function TestDeepLinkPage() {
  const [urlInfo, setUrlInfo] = useState({
    pathname: '',
    search: '',
    href: ''
  });

  useEffect(() => {
    setUrlInfo({
      pathname: window.location.pathname,
      search: window.location.search,
      href: window.location.href
    });
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Test Deep Link Page</h1>
        <p className="text-lg mb-4">
          This page is used to test the age gate redirect functionality.
        </p>
        <div className="bg-blue-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Test Instructions:</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Clear your localStorage: <code>localStorage.clear()</code></li>
            <li>Navigate to this page with query params: <code>/test-deep-link?ref=abc123&test=deep</code></li>
            <li>You should be redirected to the age gate</li>
            <li>After confirming age, you should return to this page with the query params intact</li>
          </ol>
        </div>
        <div className="mt-4 p-4 bg-green-100 rounded-lg">
          <h3 className="font-semibold">Current URL Info:</h3>
          <p>Pathname: {urlInfo.pathname}</p>
          <p>Search: {urlInfo.search}</p>
          <p>Full URL: {urlInfo.href}</p>
        </div>
        <div className="mt-4 p-4 bg-yellow-100 rounded-lg">
          <h3 className="font-semibold">localStorage Status:</h3>
          <p>is21Confirmed: {typeof window !== 'undefined' ? localStorage.getItem('is21Confirmed') || 'not set' : 'Server-side'}</p>
          <p>postAgeGateRedirect: {typeof window !== 'undefined' ? localStorage.getItem('postAgeGateRedirect') || 'not set' : 'Server-side'}</p>
        </div>
      </div>
    </Layout>
  );
} 
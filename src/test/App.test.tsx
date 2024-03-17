import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/vitest';
import App from "../App";
import { MemoryRouter } from "react-router-dom";
import React from "react";
import { AuthProviderWrapper } from "../context/auth.context";

describe('App', () => {
    beforeEach(() => {
        render(
            <React.StrictMode>
                <MemoryRouter initialEntries={["/"]}>
                    <AuthProviderWrapper>
                        <App />
                    </AuthProviderWrapper>
                </MemoryRouter>
            </React.StrictMode>
        );
        screen.debug();
    })

    it(() => {
        expect(screen.getByText('Lies die Kritik der reinen Vernunft!')).toBeInTheDocument();
    })
})
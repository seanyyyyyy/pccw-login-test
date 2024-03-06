import { test, expect } from '@playwright/test';

test('login', async ({page}) => {
    await page.goto('https://practicetestautomation.com/practice-test-login');
    await expect(page).toHaveTitle('Test Login | Practice Test Automation');

    const usernameField = page.getByRole('textbox', { name: 'username'});
    await usernameField.fill('student');

    const passwordField = page.getByRole('textbox', { name: 'password'});
    await passwordField.fill('Password123')

    await page.getByRole('button', {name: 'submit'}).click();
    await expect(page).toHaveTitle('Logged In Successfully | Practice Test Automation');
});
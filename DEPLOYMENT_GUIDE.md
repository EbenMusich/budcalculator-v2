# Deployment Guide for BUD Calculator

## Environment Variables & Static Deployment Issues

### Problem
The `logUsage.ts` function uses `process.env.NEXT_PUBLIC_SUPABASE_URL` and `process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY` which are **undefined** in static Netlify deployments. This causes:

1. Runtime errors: `undefined/rest/v1/calculator_logs`
2. Application crashes when calculators are used
3. Broken functionality across 20+ calculator components

### Solution Implemented

The `logUsage.ts` function has been updated with:

1. **Safe Environment Variable Checking**: Validates env vars before use
2. **Graceful Fallbacks**: Uses placeholder values to prevent crashes
3. **Silent Failure**: Logs warning but doesn't break the application
4. **Production Safety**: Works even without environment variables

### Deployment Options

#### Option 1: Environment Variables (Recommended)
Set environment variables in Netlify dashboard:

1. Go to Site Settings > Environment Variables
2. Add:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```
3. Redeploy the site

#### Option 2: Hardcoded Values (Quick Fix)
If you want to hardcode the values for immediate deployment:

```typescript
// In lib/logUsage.ts, replace the environment variable checks with:
const supabaseUrl = 'https://your-project.supabase.co';
const supabaseAnonKey = 'your-anon-key';
```

#### Option 3: Disable Logging (Minimal Impact)
Remove all `logUsage` calls from calculator components if logging isn't critical.

### Current Status

✅ **Fixed**: The application will no longer crash if environment variables are missing
✅ **Safe**: All 20+ calculators will work without errors
✅ **Flexible**: Can be easily configured with proper env vars later

### Testing

To verify the fix works:

1. Deploy without environment variables
2. Test any calculator (e.g., Cost Per Unit)
3. Check browser console for warning message
4. Verify calculator still functions normally

### Recommendations

1. **For Production**: Set up proper environment variables in Netlify
2. **For Development**: Use `.env.local` file with real Supabase credentials
3. **For Testing**: Current implementation allows testing without env vars

### Files Modified

- `lib/logUsage.ts` - Added safe environment variable handling
- `DEPLOYMENT_GUIDE.md` - This guide

### Calculator Components Using logUsage

The following 20+ calculators call `logUsage` and are now safe:

- Cost Per Unit
- Break-even Calculator
- Yield Forecasting
- Lighting Cost
- Labor Cost Plant
- Decarboxylation Calculator
- Extraction Cost
- Processing Output
- Process Comparison
- Solvent Recovery
- SOP Time Tracker
- Infusion Dosage
- Edibles Unit Cost
- Gummy Recipe
- Profit Margin
- Cost Allocation Tool
- Production Goal Planner
- THC Loss Calculator
- And more...

All calculators will now work safely in static deployment. 
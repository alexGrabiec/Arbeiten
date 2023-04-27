package de.uni_marburg.iliasapp;

import android.content.Context;

import androidx.test.platform.app.InstrumentationRegistry;
import androidx.test.runner.AndroidJUnit4;

import org.junit.Test;
import org.junit.runner.RunWith;

import static org.junit.Assert.*;

import de.uni_marburg.iliasapp.data.ModulSearchData;

/**
 * Instrumented test, which will execute on an Android device.
 *
 * @see <a href="http://d.android.com/tools/testing">Testing documentation</a>
 */
@RunWith(AndroidJUnit4.class)
public class ModulSearchDataTest {
    @Test
    public void testModulSearchDataInstantiation() {
        // Context of the app under test.
        Context appContext = InstrumentationRegistry.getInstrumentation().getTargetContext();
        assertEquals("de.uni_marburg.iliasapp", appContext.getPackageName());
        ModulSearchData data = new ModulSearchData(appContext);
        Modul testModul = data.modulListe.get(0);
        assertEquals(testModul.name,"Adaptive Numerische Verfahren für Operatorgleichungen");
    }


}